import { AMENITY_DEFS } from "@/types/listing";

export { AMENITY_DEFS };

export function amenityLabel(key: string): string {
  return AMENITY_DEFS.find((a) => a.key === key)?.label ?? key;
}

export function amenityIcon(key: string): string {
  return AMENITY_DEFS.find((a) => a.key === key)?.icon ?? "•";
}
