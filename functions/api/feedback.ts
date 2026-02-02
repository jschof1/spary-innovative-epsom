// Cloudflare Pages Function - Feedback Form Webhook Proxy
// The actual webhook URL is stored in Cloudflare environment variables

interface Env {
  FEEDBACK_WEBHOOK_URL: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (!env.FEEDBACK_WEBHOOK_URL) {
    return new Response(
      JSON.stringify({ error: "Webhook not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.feedback) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let requestBody = { ...body, timestamp: new Date().toISOString() };

    // Format phone number if provided
    if (body.phone) {
      let formattedPhone = body.phone.replace(/[^\d+]/g, '');
      if (formattedPhone.startsWith('0')) {
        formattedPhone = '+44' + formattedPhone.substring(1);
      } else if (formattedPhone.startsWith('44')) {
        formattedPhone = '+' + formattedPhone;
      } else if (!formattedPhone.startsWith('+') && formattedPhone.length > 0) {
        formattedPhone = '+44' + formattedPhone;
      }
      requestBody.phone = formattedPhone;
    }

    const webhookResponse = await fetch(env.FEEDBACK_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Webhook returned ${webhookResponse.status}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Feedback webhook error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
