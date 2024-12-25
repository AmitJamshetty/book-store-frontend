import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="banner_img" className="w-full" />
      </div>
      <div className="md:w-1/2 w-full">
        <h2 className="md:text-5xl text-2xl font-medium mb-7">
          New Releases This Week
        </h2>
        <p className="mb-10">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone.
        </p>
        <button className="btn-primary px-12 py-2">Subscribe</button>
      </div>
    </div>
  );
};
export default Banner;
