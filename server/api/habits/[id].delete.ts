import { eq, and } from 'drizzle-orm'
import { useValidatedParams, zh } from 'h3-zod'

export default eventHandler(async (event) => {
  const { id } = await useValidatedParams(event, {
    id: zh.intAsString,
  })

  const { user } = await requireUserSession(event)

  const deletedHabit = await useDB()
    .delete(tables.habitsTable)
    .where(and(eq(tables.habitsTable.id, id), eq(tables.habitsTable.userId, user.id)))
    .returning()

  return deletedHabit
})
