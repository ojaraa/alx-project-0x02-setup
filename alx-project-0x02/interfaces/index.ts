export interface CardProps {
  title: string;
  description: string;
  content: string;
  imageUrl?: string;
  link?: string;
  tags: string[];
}
export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
  onClick?: () => void;
}

export interface PostProps {
  userId: number;
  title: string;
  content: string; 
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

