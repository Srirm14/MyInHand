import Razorpay from "razorpay";
import { getRazorpayServerEnv } from "@/lib/server/razorpay/razorpay-env";

export function createRazorpayClient() {
  const env = getRazorpayServerEnv();
  return new Razorpay({
    key_id: env.keyId,
    key_secret: env.keySecret,
  });
}

