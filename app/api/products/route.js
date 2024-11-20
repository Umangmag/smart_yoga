// app/api/products/route.js

import clientPromise from '../../../lib/mongodb';

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db('your-database-name'); // Replace 'your-database-name' with your actual database name

    const products = await db.collection('products').find({}).toArray();
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch products' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db('your-database-name');

    const body = await req.json();
    const result = await db.collection('products').insertOne(body);

    return new Response(JSON.stringify(result), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to add product' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function PUT(req) {
  try {
    const client = await clientPromise;
    const db = client.db('your-database-name');

    const body = await req.json();
    const { _id, ...updateData } = body; // Assuming `_id` is included in the request body

    const result = await db
      .collection('products')
      .updateOne({ _id: new ObjectId(_id) }, { $set: updateData });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to update product' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function DELETE(req) {
  try {
    const client = await clientPromise;
    const db = client.db('your-database-name');

    const { _id } = await req.json(); // Assuming `_id` is sent in the request body

    const result = await db.collection('products').deleteOne({ _id: new ObjectId(_id) });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to delete product' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
