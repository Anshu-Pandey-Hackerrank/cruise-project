import { rest } from 'msw';
import { MOCK_API_URL } from './constants';
import { menu } from './mockMenu';
import { Order } from '@/models';

let order: Order = {
  id: '0',
  items: [],
};

export const handlers = [
  /* GET menu */
  rest.get(`${MOCK_API_URL}/menu`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(menu));
  }),

  /* POST order */
  rest.post(`${MOCK_API_URL}/order`, async (req, res, ctx) => {
    order = await req.json();
    console.log('----> Order posted:', JSON.stringify(order, null, 2));
    return res(ctx.status(201));
  }),

  /* GET order */
  rest.get(`${MOCK_API_URL}/order`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(order));
  }),
];
