export const GET = async () => {
  const upstream = await fetch(
    "https://raw.githubusercontent.com/thdxg/resume/main/assets/Taehoon_Lee_resume.pdf",
  );

  if (!upstream.ok) {
    return new Response("Failed to load resume", { status: 502 });
  }

  return new Response(upstream.body, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Taehoon_Lee_resume.pdf"',
    },
  });
};
