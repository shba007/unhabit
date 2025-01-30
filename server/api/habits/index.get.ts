import { eq } from 'drizzle-orm'

export default eventHandler(async (event) => {
  const { user } = await requireUserSession(event)

  const habits = await useDB().select().from(tables.habitsTable).where(eq(tables.habitsTable.userId, user.id))

  return habits
})
