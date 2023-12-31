import "@styles/globals.css";
import Menu from "@components/Menu";

export const metadata = {
  title: "josephmccain",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Menu />
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
