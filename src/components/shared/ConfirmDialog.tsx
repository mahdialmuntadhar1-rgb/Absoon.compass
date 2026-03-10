import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

export function ConfirmDialog({ isOpen, onClose, onConfirm, title, description }: { isOpen: boolean, onClose: () => void, onConfirm: () => void, title: string, description: string }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="text-xl font-display text-[var(--text-primary)] mb-2">{title}</h3>
      <p className="text-[var(--text-muted)] mb-6">{description}</p>
      <div className="flex justify-end gap-3">
        <Button variant="ghost" onClick={onClose}>Cancel</Button>
        <Button variant="destructive" onClick={() => { onConfirm(); onClose(); }}>Confirm</Button>
      </div>
    </Modal>
  );
}
