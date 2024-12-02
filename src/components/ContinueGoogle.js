import { GoogleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { signIn } from "next-auth/react";  // Ensure you're importing signIn from next-auth

export function ContinueGoogle() {
  // Handle button click for Google sign-in
  const handleGoogleSignIn = async () => {
    await signIn("google"); // Sign in with Google
  };

  return (
    <Button
      icon={
        <span className="text-2xl">
          <GoogleOutlined />
        </span>
      }
      size="large"
      type="default"
      className="w-full text-sm md:text-base bg-white border border-[#2563eb] font-semibold text-[#2563eb]"
      onClick={handleGoogleSignIn}
    >
      Continue with Google
    </Button>
  );
}
