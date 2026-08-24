export const company = {
  name: "Luz Oliveira Interiores",
  location: "Maceió, AL",
  phoneDisplay: "(82) 98895-3695",
  phoneDigits: "5582988953695",
  instagramUrl: "https://www.instagram.com/luzoliveirainteriores/",
};

export const whatsappMessage = "Oi, Luz! Vi seu portfólio e gostaria de conversar sobre um projeto de interiores. O ambiente que quero transformar é: ";
export const whatsappUrl = `https://wa.me/${company.phoneDigits}?text=${encodeURIComponent(whatsappMessage)}`;

export const projects = [
  { title:"Escritório de advocacia", segment:"Comercial", description:"Identidade regional e linguagem atemporal em um espaço com personalidade.", image:"/photos/escritorio-advocacia-upscaled.webp", imageAlt:"Capa da publicação de um escritório de advocacia com referências regionais", width:941, height:1672, instagramPostUrl:"https://www.instagram.com/luzoliveirainteriores/reel/DTbLcwxAR5q/" },
  { title:"Escritório imobiliário", segment:"Comercial", description:"Recepção, produção e atendimento reunidos em um escritório com personalidade própria.", image:"/photos/escritorio-imobiliario-upscaled.webp", imageAlt:"Capa da publicação de um projeto para escritório imobiliário", width:941, height:1672, instagramPostUrl:"https://www.instagram.com/luzoliveirainteriores/reel/DAliPiNJIwq/" },
  { title:"Quarto infantil", segment:"Residencial", description:"Planejamento que une segurança, imaginação e praticidade para a rotina da casa.", image:"/photos/quarto-infantil-upscaled.webp", imageAlt:"Capa da publicação sobre planejamento de quarto infantil", width:941, height:1672, instagramPostUrl:"https://www.instagram.com/luzoliveirainteriores/reel/C5i4QslLroV/" },
] as const;
