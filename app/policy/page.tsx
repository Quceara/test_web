export default function PolicyPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-12 text-white">
      <h1 className="text-4xl font-bold">Политика конфиденциальности</h1>
      <p className="text-lg text-zinc-300">
        Мы очень серьезно относимся к вашей приватности. Настолько серьезно, что даже сами не помним,
        где оставили cookie.
      </p>
      <p className="text-zinc-400">
        Шутки шутками, но данные пользователей не передаем третьим лицам без оснований. Только котику
        из отдела безопасности, и то по расписанию.
      </p>
      <p className="text-zinc-400">
        Если хотите удалить данные, напишите нам: мы сначала удивимся, потом все аккуратно удалим.
      </p>
    </main>
  );
}
