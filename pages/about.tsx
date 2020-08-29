import { MainLayouts } from "../Components/Layout/MainLayout";

export default function About() {
  return (
    <MainLayouts>
      <div style={{ margin: "20%", fontFamily: 'fantasy'}}>
        Info about <a href="https://github.com/MarselBurdo">me</a>
      </div>
    </MainLayouts>
  );
}
