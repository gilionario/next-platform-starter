import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Contact / About Enigmate'
};

const contactPageContent = `
## Enigmate, Unipessoal Lda

**NIPC:** 517618141  
**Natureza Jurídica:** Sociedade por Quotas  
**Capital Social:** €5.000,00  
**Gerente:** Eduardo Gil da Silva Neves Couto  
**Sede:** Rua de Além, 51, B1 5, 3.0 Esq., 4405-694 Vila Nova de Gaia, Portugal  
**CAE Principal:** 62090-R3  

---

### Contactos
Se tiver dúvidas, questões comerciais ou pedidos de suporte, use o formulário abaixo para nos contactar diretamente.

**Email:** [support@enigmate.co](mailto:support@enigmate.co)  
**Telefone:** +351 918 921 310  
`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8 text-4xl font-bold">Contact / About Enigmate</h1>
            <Markdown content={contactPageContent} className="mb-12 text-lg" />
            <div className="flex justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}


