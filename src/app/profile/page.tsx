'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function ProfilePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gold mb-4">Profile</h1>
        <p className="text-xl text-gray-300 mb-12">Manage your account settings</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="User Information" description="Your profile details">
            <p className="text-gray-400 mb-4">
              <span className="text-gold">Username:</span> Guest User
            </p>
            <p className="text-gray-400 mb-4">
              <span className="text-gold">Email:</span> user@example.com
            </p>
            <Button variant="secondary" size="sm">Edit Profile</Button>
          </Card>

          <Card title="Statistics" description="Your game statistics">
            <p className="text-gray-400 mb-2">
              <span className="text-gold">Games Played:</span> 0
            </p>
            <p className="text-gray-400 mb-2">
              <span className="text-gold">High Score:</span> 0
            </p>
            <p className="text-gray-400 mb-4">
              <span className="text-gold">Novels Read:</span> 0
            </p>
            <Button variant="secondary" size="sm">View Stats</Button>
          </Card>

          <Card title="Settings" description="Account preferences">
            <p className="text-gray-400 mb-4">Dark Theme: Enabled</p>
            <Button variant="secondary" size="sm">Change Settings</Button>
          </Card>

          <Card title="Account" description="Manage account access">
            <p className="text-gray-400 mb-4">Connected Accounts: None</p>
            <Button variant="danger" size="sm">Logout</Button>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
