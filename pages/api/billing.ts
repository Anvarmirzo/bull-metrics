// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type {NextApiRequest, NextApiResponse} from 'next';

type Data = {
	name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method === 'POST') {
		const url = `${process.env.NEXT_PUBLIC_API_URL}/billing/complete`;

		console.log(req.body);

		const response = await axios.post(url, req.body).then((x) => x.data);

		return res.status(200).json(response);
	}
}
