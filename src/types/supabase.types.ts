export type CabinType = {
  id: number;
  created_at: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
};

export type CabinFormType = Omit<CabinType, "image" | "id" | "created_at"> & {
  image: FileList | null;
};

export type SettingsType = {
  id: number;
  created_at: string;
  breakfastPrice: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  minBookingLength: number;
};

export type StatusType = "unconfirmed" | "checked-in" | "checked-out";

export type BookingDBType = {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  cabinPrice: number;
  extrasPrice: number;
  totalPrice: number;
  hasBreakfast: boolean;
  status: StatusType;
  isPaid: boolean;
  observations: string;
  guestId: number;
  cabinId: number;
};

export type GuestDBType = {
  id: number;
  created_at: string;
  fullName: string;
  email: string;
  countryFlag: string;
  nationalID: string;
  nationality: string;
};

export type BookingDetailsType = Omit<BookingDBType, "guestId" | "cabinId"> & {
  guests: Omit<GuestDBType, "id" | "created_at">;
  cabins: { name: string };
};

export type GuestRowType = Pick<GuestDBType, "fullName" | "email">;

export type BookingRowType = BookingDetailsType & { guests: GuestRowType } & {
  cabins: { name: string };
};
