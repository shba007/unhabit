export default defineOAuthGoogleEventHandler({
  config: {},
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: {
        id: user.sub,
        name: user.name,
        avatar_url: user.picture,
        email: user.email,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      logged_at: new Date().toISOString(),
    })

    await useDB()
      .insert(tables.usersTable)
      .values({
        id: user.sub,
        name: user.name,
        avatarUrl: user.picture,
        email: user.email,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning()

    return sendRedirect(event, '/')
  },

  onError(event, error) {
    console.error('Google OAuth error:', error)
    return sendRedirect(event, '/')
  },
})
