
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Add your logic to handle payment initiation using Konnect API
      // Make sure to replace the placeholder URL with the actual Konnect API endpoint
      const response = await axios.post('https://api.preprod.konnect.network/api/v2/payments/init-payment', req.body);

      // Send the response from Konnect API back to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      console.error('Error initiating payment:', error);
      res.status(500).json({ error: 'Failed to initiate payment' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
