<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SingleSession
{
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check()) {
            $user = Auth::user();
            $currentSessionId = session()->getId();

            if ($user->session_id !== $currentSessionId) {
                Auth::logout();
                return redirect()->route('login')
                    ->with('message', 'You have been logged in from another device.');
            }
        }

        return $next($request);
    }
}
