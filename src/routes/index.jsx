import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

// todo lazy loading

import { lazy } from "react";
import Loadable from "../Helpers/Loadable";
import Contact from "../views/Contact";
import AboutView from "../views/AboutView";
import Rates from "../components/Golf/Rates";
import PersonalTraining from "../components/Fitness/PersonalTraining";
import MassageTherapy from "../components/Fitness/MassageTherapy";
import GolfMobility from "../components/Fitness/GolfMobility";
import Yoga from "../components/Fitness/Yoga";
import Memberships from "../components/Golf/Memberships";
import Lessons from "../components/Golf/Lessons";
import Fitness from "../views/Fitness";
import FitnessMembership from "../components/Fitness/FitnessMembership";
import EventView from "../views/EventView";
import Golf from "../views/Golf";
const Home = Loadable(lazy(() => import("../views/Home")));

export default function TheRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rates" element={<Rates />} />
        <Route exact path="/memberships" element={<Memberships />} />
        <Route exact path="/lessons" element={<Lessons />} />
        <Route exact path="/fitness" element={<Fitness />} />
        <Route exact path="/golf" element={<Golf />} />
        <Route
          exact
          path="/fitness-membership"
          element={<FitnessMembership />}
        />

        <Route exact path="/personal-training" element={<PersonalTraining />} />
        <Route exact path="/yoga" element={<Yoga />} />
        <Route exact path="/massage-therapy" element={<MassageTherapy />} />
        <Route exact path="/golf-mobility" element={<GolfMobility />} />
        <Route exact path="/about" element={<AboutView />} />
        <Route exact path="/event" element={<EventView />} />
        <Route exact path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
