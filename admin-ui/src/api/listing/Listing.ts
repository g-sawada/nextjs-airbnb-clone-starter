import { Decimal } from "decimal.js";
import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  description: Decimal | null;
  id: string;
  listingCreatedBy?: User;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmeneties: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: number | null;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  wishlists?: Array<Wishlist>;
};
