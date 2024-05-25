
export const district = [
  " Dhaka",
  "Faridpur",
  "Gazipur",
  "Gopalganj",
  "Kishoreganj",
  "Madaripur",
  "Manikganj",
  "Munshiganj",
  "Narayanganj",
  "Narsingdi",
  "Rajbari",
  "Shariatpur",
  "Tangail",
  "Bandarban",
  "Brahmanbaria",
  "Chandpur",
  "Chattogram",
  "Cumilla",
  "Cox's Bazar",
  "Feni",
  "Khagrachari",
  "Lakshmipur",
  "Noakhali",
  "Rangamati",
  "Bagerhat",
  "Chuadanga",
  "Jashore",
  "Jhenaidah",
  "Khulna",
  "Kushtia",
  "Magura",
  "Meherpur",
  "Narail",
  "Satkhira",
  "Bogura",
  "Joypurhat",
  "Naogaon",
  "Natore",
  "Chapai Nawabganj",
  "Pabna",
  "Rajshahi",
  "Sirajganj",
  "Barguna",
  "Barishal",
  "Bhola",
  "Jhalokathi",
  "Patuakhali",
  "Pirojpur",
  "Habiganj",
  "Moulvibazar",
  "Sunamganj",
  "Sylhet",
  "Dinajpur",
  "Gaibandha",
  "Kurigram",
  "Lalmonirhat",
  "Nilphamari",
  "Panchagarh",
  "Rangpur",
  "Thakurgaon",
  "Jamalpur",
  "Mymensingh",
  "Netrokona",
  "Sherpur",
];
export const bloodGroupsType = {
  "A+": "A_POSITIVE",
  "B+": "B_POSITIVE",
  "A-": "A_NEGATIVE",
  "B-": "B_NEGATIVE",
  "O+": "O_POSITIVE",
  "O-": "O_NEGATIVE",
  "AB+": "AB_POSITIVE",
  "AB-": "AB_NEGATIVE",
};
export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessage[];
};
type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export type TResponseSuccessType = {
  data: any;
  meta: IMeta;
}
export type IMeta = {
  page: number;
  limit: number;
  total: number;
}