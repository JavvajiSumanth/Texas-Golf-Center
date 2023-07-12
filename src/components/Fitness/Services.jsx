import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import RangeImg from "../../assets/golf/Range.jpg";
import MassageImg from "../../assets/golf/massage-therapy.jpg";
import TrainingImg from "../../assets/golf/strength-training.jpg";
import AllCards from "../Reusable/AllCards";
import MainCard from "../Reusable/MainCard";
const Services = () => {
  return (
    <div>
      <MiniHeader heading={"Services"} subHeading={""} />

      <div className="bg-contain bg-no-repeat bg-center bg-[#162649]  pt-6">
        <div className="p-8 grid grid-cols-1 gap-6 w-full mx-auto">
          <MainCard
            Img={RangeImg}
            header={"Personal Training"}
            body={
              "Schedule an opportunity to talk to our physical trainer. MORE INFORMATION COMING SOON."
            }
            button={"LEARN MORE"}
          />
          <MainCard
            Img={TrainingImg}
            header={"MOBILITY AND STRENGTH TRAINING"}
            body={
              "Schedule an opportunity to talk to our physical trainer. MORE INFORMATION COMING SOON."
            }
            button={"LEARN MORE"}
          />

          <MainCard
            Img={RangeImg}
            header={"YOGA"}
            body={
              "Maddie Wildman is the resident yoga instructor at Texas 9. Her teaching philosophy centers around inclusivity and accessibility, believing that yoga is for everyone, regardless of age or skill level. Maddie’s classes cater to a diverse range of individuals, from seniors seeking gentle movement to advanced practitioners looking to deepen their practice. She is committed to creating a safe and supportive environment where students can explore and grow in their yoga journey.."
            }
            button={"LEARN MORE"}
          />
          <MainCard
            Img={MassageImg}
            header={"MASSAGE THERAPY"}
            body={
              "Schedule an opportunity to talk to our massage therapist. MORE INFORMATION COMING SOON."

            }
            button={"LEARN MORE"}
          />
        </div>
        <AllCards />
      </div>

      <Footer />
    </div>
  );
};

export default Services;
