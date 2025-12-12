export function extractCoordsFromGoogleMapsUrl(url: string) {
  const atPattern = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
  const matchAt = url.match(atPattern);
  if (matchAt) {
    return { lat: parseFloat(matchAt[1]), lng: parseFloat(matchAt[2]) };
  }

  const dPattern = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/;
  const matchD = url.match(dPattern);
  if (matchD) {
    return { lat: parseFloat(matchD[1]), lng: parseFloat(matchD[2]) };
  }

  const loosePattern = /(-?\d+\.\d+),\s*(-?\d+\.\d+)/;
  const looseMatch = url.match(loosePattern);
  if (looseMatch) {
    return { lat: parseFloat(looseMatch[1]), lng: parseFloat(looseMatch[2]) };
  }

  return null;
}
