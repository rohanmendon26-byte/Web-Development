export default async function Page({ params }) {
  const { val } = await params;

  console.log(val);

  return <h1>Product Page</h1>;
}