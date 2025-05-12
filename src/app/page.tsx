"use client";

import { useEffect, useState } from "react";
import { AuthPage } from "@/components/auth/auth-page";
import { testFirebaseConnection } from "@/lib/firebase/test-connection";

export default function Home() {
  const [connectionStatus, setConnectionStatus] = useState<'testing' | 'success' | 'error'>('testing');

  useEffect(() => {
    const testConnection = async () => {
      try {
        const result = await testFirebaseConnection();
        setConnectionStatus(result ? 'success' : 'error');
      } catch (error) {
        setConnectionStatus('error');
        console.error('Connection test failed:', error);
      }
    };
    
    testConnection();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-md space-y-4">
        {connectionStatus === 'testing' && (
          <div className="text-center text-yellow-500">Testing Firebase connection...</div>
        )}
        {connectionStatus === 'success' && (
          <div className="text-center text-green-500 mb-4">✓ Firebase connection successful</div>
        )}
        {connectionStatus === 'error' && (
          <div className="text-center text-red-500 mb-4">✗ Firebase connection failed. Check console for details.</div>
        )}
        <AuthPage />
      </div>
    </main>
  );
}
