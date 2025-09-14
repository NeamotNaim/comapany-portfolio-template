const { query: dbQuery, logger, testConnection } = require('../config/database');

async function testAnalyticsQueries() {
  try {
    console.log('🔍 Testing analytics database queries...');
    
    // Test database connection
    const connected = await testConnection();
    if (!connected) {
      console.error('❌ Database connection failed');
      return;
    }
    
    console.log('✅ Database connection successful');
    
    // Test 1: Check if tables exist
    console.log('\n📋 Checking if required tables exist...');
    
    const tablesQuery = `
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('leads', 'services', 'analytics_events', 'analytics_daily')
      ORDER BY table_name
    `;
    
    const tablesResult = await dbQuery(tablesQuery);
    console.log('Available tables:', tablesResult.rows.map(row => row.table_name));
    
    // Test 2: Check leads table structure and data
    console.log('\n👥 Testing leads table...');
    
    const leadsCountQuery = 'SELECT COUNT(*) as count FROM leads';
    const leadsCount = await dbQuery(leadsCountQuery);
    console.log(`Total leads: ${leadsCount.rows[0].count}`);
    
    const leadsColumnsQuery = `
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'leads' 
      ORDER BY ordinal_position
    `;
    const leadsColumns = await dbQuery(leadsColumnsQuery);
    console.log('Leads table columns:', leadsColumns.rows.map(row => `${row.column_name} (${row.data_type})`));
    
    // Test 3: Check analytics_events table
    console.log('\n📊 Testing analytics_events table...');
    
    const analyticsCountQuery = 'SELECT COUNT(*) as count FROM analytics_events';
    const analyticsCount = await dbQuery(analyticsCountQuery);
    console.log(`Total analytics events: ${analyticsCount.rows[0].count}`);
    
    // Test 4: Test the actual analytics queries
    console.log('\n🧪 Testing analytics queries...');
    
    // Test leads by status query
    const statusQuery = `
      SELECT 
        status,
        COUNT(*) as count,
        COALESCE(SUM(conversion_value), 0) as total_value
      FROM leads 
      WHERE created_at >= CURRENT_TIMESTAMP - INTERVAL '30 days'
      GROUP BY status
      ORDER BY count DESC
    `;
    
    console.log('Testing leads by status query...');
    const statusResult = await dbQuery(statusQuery);
    console.log('Leads by status:', statusResult.rows);
    
    // Test leads by source query
    const sourceQuery = `
      SELECT 
        COALESCE(source, 'Unknown') as source,
        COUNT(*) as count,
        COUNT(CASE WHEN status = 'converted' THEN 1 END) as conversions,
        CASE 
          WHEN COUNT(*) > 0 THEN ROUND((COUNT(CASE WHEN status = 'converted' THEN 1 END)::decimal / COUNT(*)::decimal) * 100, 2)
          ELSE 0 
        END as conversion_rate
      FROM leads 
      WHERE created_at >= CURRENT_TIMESTAMP - INTERVAL '30 days'
      GROUP BY source
      ORDER BY count DESC
    `;
    
    console.log('Testing leads by source query...');
    const sourceResult = await dbQuery(sourceQuery);
    console.log('Leads by source:', sourceResult.rows);
    
    // Test overview query
    const overviewQuery = `
      WITH lead_stats AS (
        SELECT 
          COUNT(*) as total_leads,
          COUNT(CASE WHEN status = 'new' THEN 1 END) as new_leads,
          COUNT(CASE WHEN status = 'converted' THEN 1 END) as converted_leads,
          COALESCE(AVG(CASE WHEN status = 'converted' THEN conversion_value END), 0) as avg_deal_value,
          COALESCE(SUM(CASE WHEN status = 'converted' THEN conversion_value END), 0) as total_revenue
        FROM leads 
        WHERE created_at >= CURRENT_TIMESTAMP - INTERVAL '30 days'
      ),
      service_stats AS (
        SELECT 
          COUNT(*) as total_services,
          COUNT(CASE WHEN status = 'active' THEN 1 END) as active_services
        FROM services
      ),
      analytics_stats AS (
        SELECT 
          COUNT(*) as total_page_views,
          COUNT(DISTINCT session_id) as unique_sessions,
          COUNT(DISTINCT ip_address) as unique_visitors
        FROM analytics_events 
        WHERE created_at >= CURRENT_TIMESTAMP - INTERVAL '30 days'
      )
      SELECT 
        ls.*,
        ss.*,
        ans.*,
        CASE 
          WHEN ls.total_leads > 0 THEN ROUND((ls.converted_leads::decimal / ls.total_leads::decimal) * 100, 2)
          ELSE 0 
        END as conversion_rate
      FROM lead_stats ls, service_stats ss, analytics_stats ans
    `;
    
    console.log('Testing overview query...');
    const overviewResult = await dbQuery(overviewQuery);
    console.log('Overview data:', overviewResult.rows[0]);
    
    console.log('\n✅ All analytics queries tested successfully!');
    
  } catch (error) {
    console.error('❌ Error testing analytics queries:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack
    });
  }
}

// Run the test
if (require.main === module) {
  testAnalyticsQueries()
    .then(() => {
      console.log('\n🎯 Analytics testing completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n❌ Analytics testing failed:', error);
      process.exit(1);
    });
}

module.exports = { testAnalyticsQueries };
