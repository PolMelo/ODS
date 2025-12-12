export const fetchWithFallback = async (url: string) => {
  try {
    const res = await fetch(`http://localhost:8000${url}`);
    if (!res.ok) throw new Error("HTTP fail");
    return await res.json();
  } catch {
    const res2 = await fetch(`https://localhost:8000${url}`);
    return await res2.json();
  }
};
