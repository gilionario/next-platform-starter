import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Contact Us'
};

const contactInfo = `
## Contact Enigmate

Enigmate develops and operates a digital dating platform, connecting users for both serious relationships and casual interactions. Services include user account management, matchmaking algorithms, in-app messaging, and event-based features such as Speed Blind Dating. The platform generates revenue through subscription plans, premium features, and in-app transactions. Enigmate also conducts digital marketing, email campaigns, and influencer collaborations to grow its user base.

If you have questions, business inquiries, or support requests, please use the form below to reach us directly.
`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>
            <Markdown content={contactInfo} className="mb-12 text-lg" />
            <div className="flex justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}

