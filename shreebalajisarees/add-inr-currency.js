const { Client } = require('pg')

async function addINRCurrency() {
  // Database connection
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'medusa_db',
    user: 'postgres',
    password: 'admin',
  })

  try {
    await client.connect()
    console.log('🔌 Connected to database')

    // Check if INR currency already exists
    const checkCurrency = await client.query(
      "SELECT * FROM currency WHERE code = 'inr'"
    )

    if (checkCurrency.rows.length > 0) {
      console.log('✅ INR currency already exists')
    } else {
      // Add INR currency
      console.log('💰 Adding INR currency...')
      await client.query(`
        INSERT INTO currency (code, symbol, symbol_native, name)
        VALUES ('inr', '₹', '₹', 'Indian Rupee')
        ON CONFLICT (code) DO NOTHING
      `)
      console.log('✅ INR currency added successfully')
    }

    // Check current store currencies
    const storeQuery = await client.query('SELECT * FROM store LIMIT 1')
    const store = storeQuery.rows[0]
    
    console.log('🏪 Current store currencies:', store.supported_currencies)

    // Add INR to store supported currencies if not already there
    const currentCurrencies = store.supported_currencies || []
    
    if (!currentCurrencies.some(c => c.currency_code === 'inr')) {
      const updatedCurrencies = [
        ...currentCurrencies,
        {
          currency_code: 'inr',
          is_default: false
        }
      ]

      await client.query(
        'UPDATE store SET supported_currencies = $1 WHERE id = $2',
        [JSON.stringify(updatedCurrencies), store.id]
      )
      
      console.log('✅ INR added to store supported currencies')
    } else {
      console.log('✅ INR already in store supported currencies')
    }

    // Verify the update
    const updatedStore = await client.query('SELECT * FROM store LIMIT 1')
    console.log('🎉 Updated store currencies:', updatedStore.rows[0].supported_currencies)

  } catch (error) {
    console.error('❌ Error:', error.message)
  } finally {
    await client.end()
    console.log('🔌 Database connection closed')
  }
}

addINRCurrency()
  .then(() => {
    console.log('🎉 INR currency setup completed!')
    console.log('📝 Now you can create the India region in Medusa Admin')
    process.exit(0)
  })
  .catch((error) => {
    console.error('💥 Failed to setup INR currency:', error)
    process.exit(1)
  })
