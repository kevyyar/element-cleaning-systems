export function generateSlug(serviceName: string) {
  return serviceName.toLowerCase().replace(/\s+/g, "-");
}
