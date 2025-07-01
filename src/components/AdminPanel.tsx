
import React, { useState } from 'react';
import { Settings, Save, Plus, Trash2, Edit3 } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const AdminPanel = () => {
  const { content, updateContent, isAdminMode, toggleAdminMode } = useAdmin();
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [tempContent, setTempContent] = useState<any>(null);

  const handleEdit = (section: string, data: any) => {
    setEditingSection(section);
    setTempContent(JSON.parse(JSON.stringify(data)));
  };

  const handleSave = () => {
    if (editingSection && tempContent) {
      updateContent(editingSection as any, tempContent);
      setEditingSection(null);
      setTempContent(null);
    }
  };

  const handleCancel = () => {
    setEditingSection(null);
    setTempContent(null);
  };

  if (!isAdminMode) {
    return (
      <Button
        onClick={toggleAdminMode}
        className="fixed top-4 right-4 z-50 glass-strong rounded-xl"
        size="sm"
      >
        <Settings className="w-4 h-4 mr-2" />
        Admin
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="absolute right-4 top-4 w-96 max-h-[90vh] overflow-y-auto glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Admin Panel</h2>
          <Button onClick={toggleAdminMode} variant="ghost" size="sm">
            ✕
          </Button>
        </div>

        {/* Hero Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white">Hero Section</h3>
            <Button
              onClick={() => handleEdit('hero', content.hero)}
              size="sm"
              variant="ghost"
            >
              <Edit3 className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-sm text-white/70 space-y-1">
            <p><strong>Name:</strong> {content.hero.name}</p>
            <p><strong>Title:</strong> {content.hero.title}</p>
            <p><strong>Description:</strong> {content.hero.description.substring(0, 50)}...</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <Button
              onClick={() => handleEdit('contact', content.contact)}
              size="sm"
              variant="ghost"
            >
              <Edit3 className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-sm text-white/70 space-y-1">
            <p><strong>Email:</strong> {content.contact.email}</p>
            <p><strong>Phone:</strong> {content.contact.phone}</p>
            <p><strong>Location:</strong> {content.contact.location}</p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <Button
              onClick={() => handleEdit('services', content.services)}
              size="sm"
              variant="ghost"
            >
              <Edit3 className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-sm text-white/70">
            {content.services.length} services configured
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white">Portfolio</h3>
            <Button
              onClick={() => handleEdit('portfolio', content.portfolio)}
              size="sm"
              variant="ghost"
            >
              <Edit3 className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-sm text-white/70">
            {content.portfolio.length} projects configured
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editingSection && (
        <div className="fixed inset-0 z-60 bg-black/50 flex items-center justify-center p-4">
          <div className="glass rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Edit {editingSection}</h3>
              <div className="flex gap-2">
                <Button onClick={handleSave} size="sm">
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button onClick={handleCancel} variant="ghost" size="sm">
                  Cancel
                </Button>
              </div>
            </div>

            {editingSection === 'hero' && tempContent && (
              <div className="space-y-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Name</label>
                  <Input
                    value={tempContent.name}
                    onChange={(e) => setTempContent({...tempContent, name: e.target.value})}
                    className="glass-strong rounded-xl text-white border-0"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Title</label>
                  <Input
                    value={tempContent.title}
                    onChange={(e) => setTempContent({...tempContent, title: e.target.value})}
                    className="glass-strong rounded-xl text-white border-0"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Description</label>
                  <Textarea
                    value={tempContent.description}
                    onChange={(e) => setTempContent({...tempContent, description: e.target.value})}
                    className="glass-strong rounded-xl text-white border-0"
                    rows={4}
                  />
                </div>
              </div>
            )}

            {editingSection === 'contact' && tempContent && (
              <div className="space-y-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Email</label>
                  <Input
                    value={tempContent.email}
                    onChange={(e) => setTempContent({...tempContent, email: e.target.value})}
                    className="glass-strong rounded-xl text-white border-0"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Phone</label>
                  <Input
                    value={tempContent.phone}
                    onChange={(e) => setTempContent({...tempContent, phone: e.target.value})}
                    className="glass-strong rounded-xl text-white border-0"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Location</label>
                  <Input
                    value={tempContent.location}
                    onChange={(e) => setTempContent({...tempContent, location: e.target.value})}
                    className="glass-strong rounded-xl text-white border-0"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
