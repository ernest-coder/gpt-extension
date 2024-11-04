

export enum SubscriptionType {
    'basic' = 'Basic',
    'premium' = 'Premium',
  }
  
export enum Features {
    'translation' = 'Translation',
    'pdf_chat' = 'Chat with PDF',
    'grammar_check' = 'Grammar Check',
    'web_page_chat' = 'Chat with Web Page',
    'image_generation' = 'Image Generation'
  }
  

export interface Pricing {
    id: number,
    subscription_type: SubscriptionType,
    price: number,
    credits: number,
    features: Features[],
    point_out: boolean
  }

export const pricings: Pricing[] = [
{
    id: 1,
    subscription_type: SubscriptionType.basic,
    price: 20,
    credits: 3000,
    features: [
    Features.translation,
    Features.pdf_chat,
    Features.grammar_check,
    Features.web_page_chat,
    ],
    point_out: false
},
{
    id: 2,
    subscription_type: SubscriptionType.premium,
    price: 30,
    credits: 9000,
    features: [
        Features.translation,
        Features.pdf_chat,
        Features.grammar_check,
        Features.web_page_chat,
        Features.image_generation,
    ],
    point_out: true
}
];
