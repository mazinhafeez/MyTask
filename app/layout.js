// layout.js
import '../styles/globals.css';
export const metadata = {
  title: 'MyTasks App',
  description: 'A clean and modern myTasks application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800 min-h-screen font-sans">
        <main className="flex items-center justify-center min-h-screen p-4">
          {children}
        </main>
      </body>
    </html>
  );
}

