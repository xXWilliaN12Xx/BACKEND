import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import {z} from "zod"

export async function confirmTrip (app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/trips/:tripsId/confirm', {
        schema: {
            params: z.object({
                tripId: z.string().uuid(),
            })
        }
    }, async (request) => {
        return {tripId: request.params.tripId}
    })
}
