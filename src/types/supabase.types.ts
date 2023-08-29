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
  cabinPrice: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  totalPrice: number;
  extrasPrice: number;
  hasBreakfast: boolean;
  status: StatusType;
  isPaid: boolean;
  observations: string;
  guestId: number;
  cabinId: number;
};

export type GuestType = { fullName: string; email: string };

export type BookingRowType = Pick<
  BookingDBType,
  | "id"
  | "created_at"
  | "startDate"
  | "endDate"
  | "numNights"
  | "numGuests"
  | "totalPrice"
  | "status"
> & { guests: GuestType } & { cabins: { name: string } };

// exported types from supabase:

// export type Json =
//   | string
//   | number
//   | boolean
//   | null
//   | { [key: string]: Json | undefined }
//   | Json[];
// export interface Database {
//   public: {
//     Tables: {
//       bookings: {
//         Row: {
//           cabinId: number | null;
//           cabinPrice: number | null;
//           created_at: string;
//           endDate: string | null;
//           extrasPrice: number | null;
//           guestsId: number | null;
//           hasBreakfast: boolean | null;
//           id: number;
//           isPaid: boolean | null;
//           numGuests: number | null;
//           numNights: number | null;
//           observations: string | null;
//           startDate: string | null;
//           status: string | null;
//           totalPrice: number | null;
//         };
//         Insert: {
//           cabinId?: number | null;
//           cabinPrice?: number | null;
//           created_at?: string;
//           endDate?: string | null;
//           extrasPrice?: number | null;
//           guestsId?: number | null;
//           hasBreakfast?: boolean | null;
//           id?: number;
//           isPaid?: boolean | null;
//           numGuests?: number | null;
//           numNights?: number | null;
//           observations?: string | null;
//           startDate?: string | null;
//           status?: string | null;
//           totalPrice?: number | null;
//         };
//         Update: {
//           cabinId?: number | null;
//           cabinPrice?: number | null;
//           created_at?: string;
//           endDate?: string | null;
//           extrasPrice?: number | null;
//           guestsId?: number | null;
//           hasBreakfast?: boolean | null;
//           id?: number;
//           isPaid?: boolean | null;
//           numGuests?: number | null;
//           numNights?: number | null;
//           observations?: string | null;
//           startDate?: string | null;
//           status?: string | null;
//           totalPrice?: number | null;
//         };
//         Relationships: [
//           {
//             foreignKeyName: "bookings_cabinId_fkey";
//             columns: ["cabinId"];
//             referencedRelation: "cabins";
//             referencedColumns: ["id"];
//           },
//           {
//             foreignKeyName: "bookings_guestsId_fkey";
//             columns: ["guestsId"];
//             referencedRelation: "guests";
//             referencedColumns: ["id"];
//           }
//         ];
//       };
//       cabins: {
//         Row: {
//           created_at: string;
//           description: string | null;
//           discount: number | null;
//           id: number;
//           image: string | null;
//           maxCapacity: number | null;
//           name: string | null;
//           regularPrice: number | null;
//         };
//         Insert: {
//           created_at?: string;
//           description?: string | null;
//           discount?: number | null;
//           id?: number;
//           image?: string | null;
//           maxCapacity?: number | null;
//           name?: string | null;
//           regularPrice?: number | null;
//         };
//         Update: {
//           created_at?: string;
//           description?: string | null;
//           discount?: number | null;
//           id?: number;
//           image?: string | null;
//           maxCapacity?: number | null;
//           name?: string | null;
//           regularPrice?: number | null;
//         };
//         Relationships: [];
//       };
//       guests: {
//         Row: {
//           countryFlag: string | null;
//           created_at: string;
//           email: string | null;
//           fullName: string | null;
//           id: number;
//           nationalID: string | null;
//           nationality: string | null;
//         };
//         Insert: {
//           countryFlag?: string | null;
//           created_at?: string;
//           email?: string | null;
//           fullName?: string | null;
//           id?: number;
//           nationalID?: string | null;
//           nationality?: string | null;
//         };
//         Update: {
//           countryFlag?: string | null;
//           created_at?: string;
//           email?: string | null;
//           fullName?: string | null;
//           id?: number;
//           nationalID?: string | null;
//           nationality?: string | null;
//         };
//         Relationships: [];
//       };
//       settings: {
//         Row: {
//           breakfastPrice: number | null;
//           created_at: string;
//           id: number;
//           maxBookingLength: number | null;
//           maxGuestsPerBooking: number | null;
//           minBookingLength: number | null;
//         };
//         Insert: {
//           breakfastPrice?: number | null;
//           created_at?: string;
//           id?: number;
//           maxBookingLength?: number | null;
//           maxGuestsPerBooking?: number | null;
//           minBookingLength?: number | null;
//         };
//         Update: {
//           breakfastPrice?: number | null;
//           created_at?: string;
//           id?: number;
//           maxBookingLength?: number | null;
//           maxGuestsPerBooking?: number | null;
//           minBookingLength?: number | null;
//         };
//         Relationships: [];
//       };
//     };
//     Views: {
//       [_ in never]: never;
//     };
//     Functions: {
//       [_ in never]: never;
//     };
//     Enums: {
//       [_ in never]: never;
//     };
//     CompositeTypes: {
//       [_ in never]: never;
//     };
//   };
// }
