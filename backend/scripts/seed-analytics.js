const { query: dbQuery, logger } = require('../config/database');

// Sample analytics data seeder
async function seedAnalyticsData() {
  try {
    console.log('🌱 Seeding analytics data...');

    // Clear existing analytics data
    await dbQuery('DELETE FROM analytics_events');
    await dbQuery('DELETE FROM analytics_daily');

    // Generate sample analytics events for the last 30 days
    const events = [];
    const pages = [
      '/',
      '/services',
      '/services/custom-software',
      '/services/web-app',
      '/services/mobile-app',
      '/services/ai-ml',
      '/services/blockchain',
      '/services/cloud-devops',
      '/services/ui-ux',
      '/services/cybersecurity-it',
      '/about',
      '/contact',
      '/case-studies',
      '/blog',
      '/career',
    ];

    const referrers = [
      null, // Direct traffic
      'https://google.com',
      'https://facebook.com',
      'https://twitter.com',
      'https://linkedin.com',
      'https://github.com',
      'https://stackoverflow.com',
    ];

    const userAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
    ];

    // Generate events for the last 30 days
    for (let day = 30; day >= 0; day--) {
      const date = new Date();
      date.setDate(date.getDate() - day);
      
      // Generate 50-200 events per day
      const eventsPerDay = Math.floor(Math.random() * 150) + 50;
      
      for (let i = 0; i < eventsPerDay; i++) {
        const hour = Math.floor(Math.random() * 24);
        const minute = Math.floor(Math.random() * 60);
        const eventDate = new Date(date);
        eventDate.setHours(hour, minute, 0, 0);

        const sessionId = `session_${Math.random().toString(36).substr(2, 9)}`;
        const ipAddress = `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
        const page = pages[Math.floor(Math.random() * pages.length)];
        const referrer = referrers[Math.floor(Math.random() * referrers.length)];
        const userAgent = userAgents[Math.floor(Math.random() * userAgents.length)];

        events.push({
          event_type: 'page_view',
          page_path: page,
          user_agent: userAgent,
          ip_address: ipAddress,
          referrer: referrer,
          session_id: sessionId,
          created_at: eventDate.toISOString(),
        });

        // Occasionally add form submission events
        if (Math.random() < 0.05 && page === '/contact') {
          events.push({
            event_type: 'form_submission',
            page_path: page,
            user_agent: userAgent,
            ip_address: ipAddress,
            referrer: referrer,
            session_id: sessionId,
            metadata: JSON.stringify({ form_type: 'contact' }),
            created_at: eventDate.toISOString(),
          });
        }
      }
    }

    // Insert events in batches
    console.log(`📊 Inserting ${events.length} analytics events...`);
    
    for (let i = 0; i < events.length; i += 100) {
      const batch = events.slice(i, i + 100);
      const values = batch.map((event, index) => {
        const paramIndex = index * 7;
        return `($${paramIndex + 1}, $${paramIndex + 2}, $${paramIndex + 3}, $${paramIndex + 4}, $${paramIndex + 5}, $${paramIndex + 6}, $${paramIndex + 7})`;
      }).join(', ');

      const params = batch.flatMap(event => [
        event.event_type,
        event.page_path,
        event.user_agent,
        event.ip_address,
        event.referrer,
        event.session_id,
        event.created_at,
      ]);

      const query = `
        INSERT INTO analytics_events (event_type, page_path, user_agent, ip_address, referrer, session_id, created_at)
        VALUES ${values}
      `;

      await dbQuery(query, params);
    }

    // Generate some sample leads with conversion values
    console.log('👥 Updating leads with sample conversion values...');
    
    const leadUpdates = [
      { status: 'converted', value: 15000 }, // $150.00
      { status: 'converted', value: 25000 }, // $250.00
      { status: 'converted', value: 50000 }, // $500.00
      { status: 'converted', value: 75000 }, // $750.00
      { status: 'converted', value: 100000 }, // $1000.00
      { status: 'converted', value: 200000 }, // $2000.00
      { status: 'converted', value: 350000 }, // $3500.00
      { status: 'converted', value: 500000 }, // $5000.00
    ];

    // Get some existing leads and update them
    const existingLeads = await dbQuery('SELECT id FROM leads LIMIT 20');
    
    for (let i = 0; i < Math.min(leadUpdates.length, existingLeads.rows.length); i++) {
      const lead = existingLeads.rows[i];
      const update = leadUpdates[i];
      
      await dbQuery(
        'UPDATE leads SET status = $1, conversion_value = $2 WHERE id = $3',
        [update.status, update.value, lead.id]
      );
    }

    // Create some additional sample leads if needed
    if (existingLeads.rows.length < 10) {
      console.log('📝 Creating additional sample leads...');
      
      const sampleLeads = [
        {
          name: 'John Smith',
          email: 'john.smith@example.com',
          company: 'Tech Startup Inc',
          service_interest: 'Custom Software Development',
          budget_range: '$10,000 - $50,000',
          status: 'converted',
          conversion_value: 35000,
        },
        {
          name: 'Sarah Johnson',
          email: 'sarah.j@company.com',
          company: 'Digital Agency',
          service_interest: 'Web Development',
          budget_range: '$5,000 - $25,000',
          status: 'converted',
          conversion_value: 18000,
        },
        {
          name: 'Mike Chen',
          email: 'mike.chen@startup.io',
          company: 'AI Solutions',
          service_interest: 'AI & Machine Learning',
          budget_range: '$25,000 - $100,000',
          status: 'converted',
          conversion_value: 65000,
        },
        {
          name: 'Emily Davis',
          email: 'emily@mobile-app.com',
          company: 'Mobile First',
          service_interest: 'Mobile App Development',
          budget_range: '$15,000 - $75,000',
          status: 'proposal_sent',
          conversion_value: null,
        },
        {
          name: 'David Wilson',
          email: 'david.w@enterprise.com',
          company: 'Enterprise Corp',
          service_interest: 'Cybersecurity & IT Consulting',
          budget_range: '$50,000+',
          status: 'qualified',
          conversion_value: null,
        },
      ];

      for (const lead of sampleLeads) {
        await dbQuery(`
          INSERT INTO leads (name, email, company, service_interest, budget_range, status, conversion_value, source)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `, [
          lead.name,
          lead.email,
          lead.company,
          lead.service_interest,
          lead.budget_range,
          lead.status,
          lead.conversion_value,
          'website'
        ]);
      }
    }

    console.log('✅ Analytics data seeding completed successfully!');
    console.log(`📊 Generated ${events.length} analytics events`);
    console.log('👥 Updated leads with conversion data');
    console.log('🎯 Ready to view real analytics in the admin dashboard!');

  } catch (error) {
    console.error('❌ Error seeding analytics data:', error);
    throw error;
  }
}

// Run the seeder if called directly
if (require.main === module) {
  seedAnalyticsData()
    .then(() => {
      console.log('🌱 Seeding completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Seeding failed:', error);
      process.exit(1);
    });
}

module.exports = { seedAnalyticsData };
