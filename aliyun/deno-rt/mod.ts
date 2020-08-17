import {
  ServerRequest,
  listenAndServe
} from "https://deno.land/std/http/server.ts"

const handler = async (req: ServerRequest): Promise<void> => {
  const rid: string = req.headers.get('x-fc-request-id') ?? 'unknown'

  console.log(`FC Invoke Start RequestId: ${rid}`)

  req.respond({ body: req.body })
}

// Get port from env
const port = Deno.env.get('FC_SERVER_PORT') ?? '9000'

listenAndServe(`:${port}`, handler)
