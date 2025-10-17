import axios from "axios";


// Fetches a random cat fact and returns user profile information.
export const getProfile = async (req, res) => {
  try {
    console.log(`[${new Date().toISOString()}] Fetching cat fact from external API...`);

    const catFactResponse = await axios.get('https://catfact.ninja/fact', {
      timeout: 5000, // 5 second timeout
    });

    const catFact = catFactResponse.data.fact;

    const response = {
      status: "success",
      user: {
        email: "chinecheremrose1@gmail.com",
        name: "Kalu Chinecherem Rose",
        stack: "Node.js/Express"
  },
      timestamp: new Date().toISOString(),
      fact: catFact
    }

    // Set Content-Type header
    res.setHeader("Content-Type", "application/json");

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    // Graceful fallback if API fails
    const fallbackResponse = {
      status: "success",
      user: {
        email: "chinecheremrose1@gmail.com",
        name: "Kalu Chinecherem Rose",
        stack: "Node.js/Express"
  },
      timestamp: new Date().toISOString(),
      fact: "Cat fact temporarily unavailable. Did you know cats spend 70% of their lives sleeping?"
    };

    res.setHeader('Content-Type', 'application/json'); // Set content-type header

    return res.status(200).json(fallbackResponse);
  }
  };

