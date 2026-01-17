import { useRef } from "react";
import WeatherBanner from "../components/dashboard/WeatherBanner";
import FieldCard from "../components/dashboard/FieldCard";
import TimelinePreview from "../components/dashboard/TimelinePreview";
import { fields } from "../utils/constants";

export default function Dashboard() {
  const scrollRef = useRef(null);

  const handleWheelScroll = (e) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <>
      <WeatherBanner />

      <div
        className="field-scroll"
        ref={scrollRef}
        onWheel={handleWheelScroll}
      >
        {fields.map((field) => (
          <FieldCard key={field.id} field={field} />
        ))}
      </div>

      <TimelinePreview />
    </>
  );
}
