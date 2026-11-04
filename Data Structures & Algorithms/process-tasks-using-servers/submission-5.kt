class Solution {
    fun assignTasks(servers: IntArray, tasks: IntArray): IntArray {
        val available = PriorityQueue<Int> { a, b ->
            if (servers[a] != servers[b]) {
                servers[a].compareTo(servers[b])
            } else {
                a.compareTo(b)
            }
        }

        val busy = PriorityQueue<LongArray> { a, b ->
            if (a[0] != b[0]) {
                a[0].compareTo(b[0])
            } else if (servers[a[1].toInt()] != servers[b[1].toInt()]) {
                servers[a[1].toInt()].compareTo(servers[b[1].toInt()])
            } else {
                a[1].compareTo(b[1])
            }
        }

        for (i in servers.indices) {
            available.offer(i)
        }

        val result = IntArray(tasks.size)
        var time = 0L

        for (i in tasks.indices) {
            time = maxOf(time, i.toLong())

            while (busy.isNotEmpty() && busy.peek()[0] <= time) {
                available.offer(busy.poll()[1].toInt())
            }

            if (available.isEmpty()) {
                time = busy.peek()[0]

                while (busy.isNotEmpty() && busy.peek()[0] <= time) {
                    available.offer(busy.poll()[1].toInt())
                }
            }

            val server = available.poll()
            result[i] = server

            busy.offer(longArrayOf(time + tasks[i], server.toLong()))
        }

        return result
    }
}