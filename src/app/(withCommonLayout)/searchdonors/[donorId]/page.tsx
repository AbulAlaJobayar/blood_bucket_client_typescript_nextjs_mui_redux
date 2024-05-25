const DonorDetailsPage = ({ params }: { params: { donorId: string } }) => {
  console.log(params);
  return (
    <div>
      <h1>This is page component{params.donorId}</h1>
    </div>
  );
};

export default DonorDetailsPage;
