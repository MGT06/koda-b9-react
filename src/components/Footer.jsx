function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 px-4">
      <div className="py-4 flex items-center justify-between text-sm text-slate-500">
        <span>Minitask Day 1 Week 5 — koda-b9-react</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;