# 🌍 AjiraPrep – AI-Powered Mock Interview Platform

**AjiraPrep** is a futuristic, AI-driven SaaS platform tailored for the Tanzanian job market, helping users confidently prepare for job interviews through real-time mock sessions, feedback, and career tools.

> “Ajira” means *job* in Swahili — and AjiraPrep is your ultimate job prep assistant.

---

## 🚀 Features

- 🤖 **AI-Powered Mock Interviews** – Real-time, smart Q&A sessions using AI to simulate job interviews.
- 🌐 **Swahili & English Support** – Localized experience for Tanzanian users with multi-language support.
- 📊 **Detailed Feedback** – Get insights on your responses, confidence level, and tips for improvement.
- 📱 **Mobile-Friendly** – Fully responsive UI for use across mobile and desktop devices.
- 🔐 **User Authentication** – Secure login/signup system with Firebase.
- ☁️ **Cloud Storage** – Save user sessions and progress via Firebase backend.
- 🛠️ **Admin Dashboard** – Manage users, questions, and feedback modules from a custom admin panel.
- 💳 **Scalable SaaS-Ready** – Built for growth with a clean subscription/pay-per-use system in mind.

---

## 🧠 Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration:** [Vapi](https://www.vapi.ai/) for voice-based AI interviews
- **Backend & Auth:** [Firebase](https://firebase.google.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Icons:** [Lucide](https://lucide.dev/), [Heroicons](https://heroicons.com/)

---

## 🖼️ Screenshots

> _Add your actual screenshots here when available._

![AjiraPrep Home](screenshots/homepage.png)
![Mock Interview in Action](screenshots/interview-session.png)
![Dashboard Preview](screenshots/dashboard.png)

---

## 📦 Installation & Setup

1. **Clone the repo**

```bash
git clone https://github.com/your-username/ajiraprep.git
cd ajiraprep
```
2. **Install Dependencies**

```bash
npm install
```
3. **Set up environment variables**

Create a .env.local file in the root directory and add your Firebase and Vapi credentials:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

NEXT_PUBLIC_VAPI_API_KEY=your_vapi_key
```
4. **Run the development server**

```bash
npm run dev
```
Your app should now be running on http://localhost:3000.

## 🧪 Testing
Coming soon: Unit tests and integration tests for interview logic and user flows.

## 📈 Future Roadmap
- 🎤 Voice-to-text transcription with analysis
- 📱 Mobile app (React Native)
- 🌍 More local language support
- 💼 Organization dashboard for HR and academic partners

## 🤝 Contributing
Contributions are welcome! Here's how:
