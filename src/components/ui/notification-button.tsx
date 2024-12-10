import { Notification } from '@/atoms/notification'
import { Button } from '@/components/ui/button'
import
{
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useNotifications } from '@/hooks/use-notifications'
import { formatDistanceToNow } from 'date-fns'
import { Bell } from 'lucide-react'
import Link from 'next/link'

function NotificationItem({ notification, onRead }: { notification: Notification; onRead: () => void })
{
    return (
        <DropdownMenuItem className="flex flex-col items-start p-2" onSelect={onRead}>
            <div className="font-semibold">{notification.notificationType}</div>
            <div className="text-sm text-muted-foreground">{notification.messageId.data}</div>
            <div className="text-xs text-muted-foreground mt-1">
                {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
            </div>
        </DropdownMenuItem>
    )
}

export function NotificationButton()
{
    const { notifications, markAsRead, markAllAsRead } = useNotifications()
    const unreadCount = notifications.filter(n => n.status === 'unread').length

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                    <Bell className="h-[1.2rem] w-[1.2rem]" />
                    {unreadCount > 0 && (
                        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center">
                            {unreadCount}
                        </span>
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="font-normal">
                    <h2 className="text-lg font-semibold">Notifications</h2>
                    <p className="text-sm text-muted-foreground">You have {unreadCount} unread messages</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.slice(0, 5).map((notification) => (
                    <NotificationItem
                        key={notification._id}
                        notification={notification}
                        onRead={() => markAsRead(notification._id)}
                    />
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/notifications" className="w-full text-center">
                        See all notifications
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => markAllAsRead()}>
                    Mark all as read
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

