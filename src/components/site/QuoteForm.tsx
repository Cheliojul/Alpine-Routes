import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function QuoteForm() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Quote request received", { description: "We'll be back to you within 2 business hours." });
      (e.target as HTMLFormElement).reset();
    }, 700);
  }

  const fieldCls = "w-full bg-transparent border-b border-border focus:border-amber-signal outline-none py-3 text-foreground placeholder:text-muted-foreground transition-colors";
  const labelCls = "text-[11px] font-display font-semibold tracking-[0.18em] text-steel uppercase";

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      <div>
        <label className={labelCls}>Full Name</label>
        <input required name="name" placeholder="Jane Doe" className={fieldCls} />
      </div>
      <div>
        <label className={labelCls}>Company</label>
        <input name="company" placeholder="Acme GmbH" className={fieldCls} />
      </div>
      <div>
        <label className={labelCls}>From</label>
        <input required name="from" placeholder="Vienna, AT" className={fieldCls} />
      </div>
      <div>
        <label className={labelCls}>To</label>
        <input required name="to" placeholder="Lisbon, PT" className={fieldCls} />
      </div>
      <div>
        <label className={labelCls}>Cargo Type</label>
        <select required name="cargo" className={fieldCls} defaultValue="">
          <option value="" disabled>Select cargo type</option>
          <option>General freight</option>
          <option>Pallets (EUR / IND)</option>
          <option>Temperature controlled</option>
          <option>Fragile / High-value</option>
          <option>Documents / Express</option>
        </select>
      </div>
      <div>
        <label className={labelCls}>Email</label>
        <input required type="email" name="email" placeholder="you@company.eu" className={fieldCls} />
      </div>
      <div className="md:col-span-2">
        <label className={labelCls}>Message</label>
        <textarea name="message" rows={3} placeholder="Dimensions, weight, deadline…" className={fieldCls + " resize-none"} />
      </div>
      <div className="md:col-span-2 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center gap-3 bg-amber-signal text-navy-deep px-7 py-4 font-display font-bold uppercase tracking-wider text-sm hover:bg-amber-signal/90 transition-colors disabled:opacity-60"
        >
          {loading ? "Sending…" : "Request a Quote"}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
