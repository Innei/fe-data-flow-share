import GradientTitle from "../../components/GradientTitle";
import TitleContentSlide from "../../slide-templates/TitleContentSlide";

export default function CustomizationInstructionSlide() {
  return (
    <TitleContentSlide
      title={<h2>React + Tailwind CSS 🚀</h2>}
      content={
        <div className="h-full w-full">
          <ul>
            <li>
              All the customization power of{" "}
              <a
                href="https://react.dev/"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                React
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com//"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Tailwind
              </a>
            </li>
            <br />
            <li>Create slides as React components</li>
            <li>
              Construct custom{" "}
              <span className="text-pink-500">slide templates</span>
            </li>
            <li className="relative">
              <span className="italic font-black underline tracking-wider text-fuchsia-400 hover:text-fuchsia-500 -rotate-6 inline-block">
                Style
              </span>{" "}
              everything in a breeze with Tailwind CSS
              <span className="absolute text-xl right-0 -top-4 rotate-6">
                <span className="tracking-tight font-serif">Professional</span>{" "}
                or{" "}
                <GradientTitle className="font-semibold tracking-wide bg-gradient-to-r from-blue-400 to-80% to-pink-500">
                  Playful
                </GradientTitle>
              </span>
            </li>
            <li className="mt-4">
              Easily use, adapt or build new features
              <ul>
                <li className="text-4xl text-blue-900 italic">
                  BTW: Did you notice this cool footer already? 👇
                </li>
              </ul>
            </li>
          </ul>
        </div>
      }
    />
  );
}
