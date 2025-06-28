import { inngest } from "./client";
import { Agent, gemini, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "summarizer",
      system:
        "You are an expert Programmer. Write code to solve the problem below.",
      model: gemini({ model: "gemini-2.0-flash" }),
    });

    const { output } = await codeAgent.run(
      `Solve this problem in python: ${event.data.value}`
    );
    console.log(output);

    return { output };
  }
);
