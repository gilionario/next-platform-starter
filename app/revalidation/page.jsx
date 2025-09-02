import { Markdown } from 'components/markdown';

const companyStory = `
## O Problema que Resolvemos

Na era digital, existe uma quantidade enorme de informações espalhadas pela internet. Empresas, profissionais e usuários comuns muitas vezes **perdem tempo e recursos** tentando encontrar dados relevantes de forma eficiente. Bases de dados desorganizadas, sites desatualizados e informações inacessíveis criam frustração e atrasam decisões importantes.

## A Nossa Solução

A Enigmate nasceu para **tornar a informação acessível e confiável**. Criamos sistemas que **organizam e mantêm bases de dados extensas**, facilitando o acesso a conteúdos de forma rápida e intuitiva. Além disso, gerimos portais web que centralizam informações atualizadas periodicamente, oferecendo ferramentas de pesquisa inteligentes que conectam dados relevantes a quem precisa deles.

### Como Fazemos

- Desenvolvemos **sistemas web personalizados** que consolidam dados dispersos.  
- Implementamos **motores de pesquisa internos** para facilitar consultas precisas.  
- Mantemos **portais e sites atualizados** com conteúdos de interesse.  
- Oferecemos **serviços de TI e informática**, incluindo recuperação de dados, instalação de software e suporte técnico.

> O nosso objetivo é transformar informação complexa e dispersa em **conhecimento acessível**, ajudando empresas e pessoas a tomar decisões de forma rápida e segura.
`;

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <Markdown 
        content={companyStory} 
        className="markdown"
      />
      <style jsx>{`
        .markdown h2, .markdown h3 {
          color: #06b38d;
        }
        .markdown p, .markdown li, .markdown blockquote {
          color: white;
        }
      `}</style>
    </div>
  );
}





