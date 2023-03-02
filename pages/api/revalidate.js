export default async function handler(req, res) {
  try {
    await res.revalidate('/blog/g_pro_wireless')
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
